export default interface IBingobookFetchRepository {
    /**
     * DB検索。
     * Wanted情報を特定して、１件取得
     * @param whois 
     */
    StoreWanteds(whois: string): Promise<any>;
}