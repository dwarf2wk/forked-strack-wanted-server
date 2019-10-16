import Datastore from '../app.infrastructure.datastore/Infra.Datastore';
import TrWanted from '../app.db.entities/TrWanted';
import WantedDomain from '../app.domains/WantedDomain';

export default class WantedsGet {

    public async Get(req, res, next) {

        const datastore = new Datastore();
        datastore.Run([TrWanted])
        .then(async (result: any) => {

            const wantedDm = new WantedDomain(datastore);
            const wanteds = await wantedDm.FindMatches(WantedDomain.ENABLED_STATUS__ENABLED);

            result.wanteds = wanteds;
            return result;
        })
        .then(async (result: any) => {
            return res.send(JSON.stringify({
                success: true,
                wanteds: result.wanteds
            }));
        })
        .catch(async (error: any) => {
            throw new Error(JSON.stringify({
                success: false
            }));
        });
    }
}