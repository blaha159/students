export type SubstitutionFilter = {
    active: boolean | null
    deleted: boolean | null
    usernameFor: string
    usernameTo : string
    dateFrom: string
    dateTo: string
}

export class ProductEntry {
    productId: number | null;
    
    constructor(productId: number | null) {
      this.productId = productId;
    }
  }
  