import "module-alias/register";
import moduleAlias from "module-alias";
import path from "path";

if (process.env.AWS_ENV === "true") {
  moduleAlias.addAliases({
    "@lambdaLayer": `/opt/nodejs/`,
  });
} else {
  const sharedFolder = path.resolve(__dirname, "..", "shared");
  moduleAlias.addAliases({
    "@lambdaLayer": sharedFolder,
  });
}
