import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
   res: NextApiResponse, ){
    // check for secret to confirm this is a valid request
    if(req.query.secret !== process.env.REVALIDATE_SECRET){
      return res.status(401).json({message:'Invalid token'})
    }

try{
  // Regenerate our index route showing the images
  await res.revalidate('/')
  return res.json({revalidate : true})

   }catch(err){
    return res.status(500).send('Error revalidating')
   }
  }