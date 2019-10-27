import DataStore from "../app.infras/infra.datastores/datastore";

export abstract class AbsRepository {
    /** DataStore生成する場合に実装 */
    public abstract CreateDataStore(): Promise<any /* Repository */>;
    /* 外部からこのリポジトリにDataStoreを設定する場合に実装 */
    public abstract SetDataStore(datastore: DataStore): Promise<any /* Repository */>;
    /** リポジトリのネストが必要な際、この中で生成し、データストアを渡してあげる */
    public abstract CreateNestedRepository(datastore: DataStore): Promise<any /* Repository */>;
    /** トランザクション管理実施 */
    public abstract Run(fnc: (result: any) => void): Promise<any /* Repository */>;
    /** トランザクション管理実施 */
    public abstract RunWithTran(fnc: (result: any) => void): Promise<any /* Repository */>;
}