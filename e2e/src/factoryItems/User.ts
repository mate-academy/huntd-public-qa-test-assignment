import { FactoryItem } from '@/factoryItems/FactoryItem'
import { FactoryItemType } from "@/common/typedefs/itemType.typedefs";
import { UserOptions } from "@/common/typedefs/user.typedefs";
import { generateEmail, generatePassword } from '@/common/testData/user/generateUserData';
export class User extends FactoryItem {
  itemType: FactoryItemType;
  email: string;
  password: string;

  public constructor(options: UserOptions = {}) {
    super();
    this.itemType = FactoryItemType.User;
    this.email = options.email ||  generateEmail()
    this.password = options.password || generatePassword();
  }
}
