/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/ban-types */

import axios from 'axios'
import environment from '../configs/environment'

/* eslint-disable @typescript-eslint/no-unused-vars */
export default function templateNaver(
    template: any,
    userId: string,
    token: string
) {
    try {
        return new Promise((resolve, reject) => {
            axios.post(
                `https://www.worksapis.com/v1.0/bots/${environment.botId}/users/${userId}/messages`,
                template,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            ).then(() => {
                resolve("complate")
            })
            .catch((error) => {
                reject(error)
            })
        })
    } catch (error) {
        console.log(error)
    }
}
