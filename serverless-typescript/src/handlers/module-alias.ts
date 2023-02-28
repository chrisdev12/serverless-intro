import "module-alias/register";
import moduleAlias from "module-alias";
import path from "path";

const layerFolder = "shared";
const awsLayerPath = "/opt/nodejs";

if (process.env.AWS_ENV === "true") {
  moduleAlias.addAliases({
    "@lambdaLayer": `${awsLayerPath}/${layerFolder}`,
  });
} else {
  const sharedFolder = path.resolve(__dirname, "..", layerFolder);
  moduleAlias.addAliases({
    "@lambdaLayer": sharedFolder,
  });
}
