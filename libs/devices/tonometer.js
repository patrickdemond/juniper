const tools = require( '../tools.js' );

/**
 * Start the tonometer device
 * 
 * @param Request req The request to send to the device
 * @param Response res The response returned from the device
 */
const deviceName = 'tonometer';

exports.start = async ( req, res ) => {
  console.log( 'POST /' + deviceName + ' request received from ' + tools.getAddress( req ) );
  let response = await tools.sendToCypress( deviceName, '-a ' + req.body.key1 + ' -b ' + req.body.key2 );
  console.log( 'POST /' + deviceName + ' request processed' );
  res.send( response ? 'true' : 'false' );
};
