import router from '../router';
import { IError } from "../../interfaces/IError";
import { terminal } from "../../services/terminal";
import { bcrypt, authUser, jwtCreator, jwtVerify } from '../../warehouse/middlewares';
import { Request, Response } from "express";
import { GITHUB_CLIENT_ID, GITHUB_SECRET } from '../../ulils';

router.route('/github')
  .get(async (req: Request, res: Response) => {
    terminal(`Received ${req.method} request at terminal '${req.baseUrl}${req.url}' endpoint`);

    const { code } = req.query;
    // if (!code) {
    //   terminal('ERROR, no code.');
    //   res.send({
    //     success: false,
    //     message: 'ERROR, no code. '
    //   });
    // }
    // const body = {
    //   client_id: GITHUB_CLIENT_ID,
    //   client_secret: GITHUB_SECRET,
    //   code: code
    // };
    // fetch('https://github.com/login/oauth/access_token', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body)
    // })
    //   .then((res) => res.json())
    //   .then((resData) => {
    //     const { data } = resData.body;
    //     res.send(data);
    //   });
    console.log(code);
    // res.sendStatus(200);
  });
export default router; 