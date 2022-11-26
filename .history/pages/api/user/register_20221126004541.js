import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import config from '../../../lib/config';
import axios from 'axios';

const handler =nc();

handler.post(async(req, res) => {
    const projectID = config.projectId;
    const dataset = config.dataset;
    const tokenWriteAccess = process.env.SANITY_AUTH_TOKEN;
    const createMutations = [{
        create: {
            _type: 'user',
            name:req.body.name,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password),
            isAdmin: false,
        }
    }]
})

export default handler;