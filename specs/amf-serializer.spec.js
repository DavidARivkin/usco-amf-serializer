var THREE = require("three");
var AMFSerializer = require("../amf-serializer");
var fs = require("fs");
var getZippedContent = require('./getZippedContent');

describe("AMF serializer tests", function() {
  var serializer = new AMFSerializer();
 
  it("can serialize to amf files", function() {
    var object = new THREE.Mesh(new THREE.CubeGeometry(10,10,10),new THREE.MeshBasicMaterial);

    var obsGeneratedAMF = serializer.serialize(object);
    //fs.writeFileSync("specs/data/cube.amf",obsGeneratedAMF);
    var expGeneratedAMF = fs.readFileSync("specs/data/cube.amf", "utf8")
    expect(obsGeneratedAMF).toEqual(expGeneratedAMF);
  });

  it("can serialize to compressed amf files", function() {
    var object = new THREE.Mesh(new THREE.CubeGeometry(10,10,10),new THREE.MeshBasicMaterial);

    var obsGeneratedAMF = getZippedContent( serializer.serialize(object,true, "cube.amf") );
    var expGeneratedAMF = getZippedContent( fs.readFileSync("specs/data/cube_zipped.amf", "binary") );

    expect(obsGeneratedAMF).toEqual(expGeneratedAMF);
  });

  /*it("can serialize an object hierarchy to amf files", function() {
    var object = new THREE.Mesh(new THREE.CubeGeometry(10,10,10),new THREE.MeshBasicMaterial);
    var subObject = new THREE.Mesh(new THREE.SphereGeometry(10,10,10),new THREE.MeshBasicMaterial);
    subObject.position.x = 20;
    object.add( subObject );

    var obsGeneratedAMF = serializer.serialize(object);
    var expGeneratedAMF = fs.readFileSync("specs/data/hierarchy.amf", "utf8")
    expect(obsGeneratedAMF).toEqual(expGeneratedAMF);
  });*/
});
