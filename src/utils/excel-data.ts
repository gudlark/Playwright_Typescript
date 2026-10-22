import path from 'node:path';
import ExcelJS from 'exceljs';

export interface LoginTestCase {
  caseId: string;
  username: string;
  password: string;
  expectedMessage: string;
  shouldLogin: boolean;
}

const workbookPath = path.resolve(process.cwd(), 'test-data', 'login-data.xlsx');
const sheetName = 'Login';

export async function readLoginTestCases(): Promise<LoginTestCase[]> {
  const workbook = new ExcelJS.Workbook();

  try {
    await workbook.xlsx.readFile(workbookPath);
  } catch (error) {
    throw new Error(`Unable to read Excel test data at "${workbookPath}".`, {
      cause: error,
    });
  }

  const worksheet = workbook.getWorksheet(sheetName);
  if (!worksheet) {
    throw new Error(`Worksheet "${sheetName}" was not found in "${workbookPath}".`);
  }

  const columnIndexes = new Map<string, number>();
  worksheet.getRow(1).eachCell((cell, columnNumber) => {
    const header = cell.text.trim();
    if (header) {
      columnIndexes.set(header, columnNumber);
    }
  });
  const requiredColumns = [
    'caseId',
    'username',
    'password',
    'expectedMessage',
    'shouldLogin',
  ];
  const missingColumns = requiredColumns.filter((column) => !columnIndexes.has(column));
  if (missingColumns.length > 0) {
    throw new Error(
      `Worksheet "${sheetName}" is missing required columns: ${missingColumns.join(', ')}.`,
    );
  }
  const getColumnIndex = (column: string): number => {
    const columnIndex = columnIndexes.get(column);
    if (columnIndex === undefined) {
      throw new Error(`Required column "${column}" was not found in "${sheetName}".`);
    }
    return columnIndex;
  };

  if (worksheet.rowCount < 2) {
    throw new Error(`Worksheet "${sheetName}" contains no test cases.`);
  }

  const testCases: LoginTestCase[] = [];
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) {
      return;
    }

    const caseId = getRequiredText(row, getColumnIndex('caseId'), rowNumber);
    const username = getRequiredText(row, getColumnIndex('username'), rowNumber);
    const password = getRequiredText(row, getColumnIndex('password'), rowNumber);
    const expectedMessage = getRequiredText(
      row,
      getColumnIndex('expectedMessage'),
      rowNumber,
    );
    const shouldLoginValue = getRequiredText(
      row,
      getColumnIndex('shouldLogin'),
      rowNumber,
    ).toLowerCase();

    if (shouldLoginValue !== 'true' && shouldLoginValue !== 'false') {
      throw new Error(
        `Invalid shouldLogin value in "${sheetName}" row ${rowNumber}; expected true or false.`,
      );
    }

    testCases.push({
      caseId,
      username,
      password,
      expectedMessage,
      shouldLogin: shouldLoginValue === 'true',
    });
  });

  return testCases;
}

function getRequiredText(
  row: ExcelJS.Row,
  columnIndex: number,
  rowNumber: number,
): string {
  const value = row.getCell(columnIndex).text.trim();
  if (!value) {
    throw new Error(
      `Missing required value in "${sheetName}" row ${rowNumber}, column ${columnIndex}.`,
    );
  }
  return value;
}
