// NET SALARY CALCULATOR
// This program calculates Net Salary from inputs: basic salary and benefits
// It factors in: PAYE, SHIF, NSSF (Tier I & II), and Housing Levy (2025 rates)

// Function to calculate PAYE (progressive tax system based on salary bands)
function calculatePAYE(taxablePay) {
  let tax = 0;

  // Apply tax bands progressively
  if (taxablePay <= 24000) {
    tax = taxablePay * 0.1;
  } else if (taxablePay <= 32333) {
    tax = 24000 * 0.1 + (taxablePay - 24000) * 0.25;
  } else if (taxablePay <= 500000) {
    tax = 24000 * 0.1 + (32333 - 24000) * 0.25 + (taxablePay - 32333) * 0.3;
  } else if (taxablePay <= 800000) {
    tax =
      24000 * 0.1 +
      (32333 - 24000) * 0.25 +
      (500000 - 32333) * 0.3 +
      (taxablePay - 500000) * 0.325;
  } else {
    tax =
      24000 * 0.1 +
      (32333 - 24000) * 0.25 +
      (500000 - 32333) * 0.3 +
      (800000 - 500000) * 0.325 +
      (taxablePay - 800000) * 0.35;
  }

  // Apply personal relief of Ksh 2,400 per month
  const personalRelief = 2400;
  tax -= personalRelief;

  // Ensure tax cannot be negative
  return Math.max(tax, 0);
}

// Function to calculate SHIF (replaces NHIF) → 2.75% of gross salary
function calculateSHIF(grossSalary) {
  return grossSalary * 0.0275;
}

// Function to calculate NSSF contributions (Tier I & Tier II, employee share only)
function calculateNSSF(basicSalary) {
  let nssf = 0;

  // Tier I → 6% of first 8,000
  const tierI = Math.min(basicSalary, 8000) * 0.06;

  // Tier II → 6% of amount between 8,001 and 72,000
  let tierII = 0;
  if (basicSalary > 8000) {
    tierII = Math.min(basicSalary - 8000, 64000) * 0.06;
  }

  nssf = tierI + tierII;
  return nssf;
}

// Function to calculate Housing Levy → 1.5% of gross salary
function calculateHousingLevy(grossSalary) {
  return grossSalary * 0.015;
}

// Main function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
  // Gross salary = basic + benefits
  const grossSalary = basicSalary + benefits;

  // Calculate deductions
  const payee = calculatePAYE(grossSalary);
  const shif = calculateSHIF(grossSalary);
  const nssf = calculateNSSF(basicSalary);
  const housingLevy = calculateHousingLevy(grossSalary);

  // Net salary = gross - all deductions
  const netSalary = grossSalary - (payee + shif + nssf + housingLevy);

  // Return a breakdown
  return {
    grossSalary,
    payee,
    shif,
    nssf,
    housingLevy,
    netSalary,
  };
}

// Example run
console.log(calculateNetSalary(50000, 10000));
/*
Expected output (values approximate depending on tax calculation):
{
  grossSalary: 60000,
  payee: <calculated progressive tax - relief>,
  shif: 1650,
  nssf: 3180,
  housingLevy: 900,
  netSalary: <gross - deductions>
}
*/
