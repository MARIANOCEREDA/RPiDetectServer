import { PackageModel, PACKAGE_TABLE_NAME, Package } from "./package.model.js";

function setUpModels(sequelize) {

  Package.init(PackageModel, Package.config(sequelize));
  
}

export { setUpModels }
