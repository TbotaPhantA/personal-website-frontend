import { ValidationError } from 'class-validator';

export function extractErrorMessages(validationErrors: ValidationError[]): string[] {
  return validationErrors.reduce((acc, e) => [
    ...acc,
    ...(e.constraints ? Object.values(e.constraints) : []) ,
    ...(e.children && e.children.length > 0 ? extractErrorMessages(e.children) : [])
  ], new Array<string>());
}
