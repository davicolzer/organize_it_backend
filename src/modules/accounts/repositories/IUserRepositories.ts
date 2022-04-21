export interface IUserRepository {
  create(data:any): Promise<void>;
  findById(id: string): Promise<any>;
}
