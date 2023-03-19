export class Category {
  private readonly category: string;

  get value() {
    return this.category;
  }

  private validateCategory(category: string) {
    const validCategories = ['social', 'transaction', 'security', 'ads'];
    return validCategories.includes(category);
  }

  constructor(category: string) {
    const isValidCategory = this.validateCategory(category);
    if (!isValidCategory) {
      throw new Error('Invalid category error.');
    }
    this.category = category;
  }
}
