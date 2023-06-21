import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entities/user";
import InputUser  from "../Type/createUserInput";

@Resolver()
export class Hello {
  @Query(() => String)
  async helloworld() {
    return "Hello";
  }

  @Mutation(() => User)
  async createSuper(@Arg("inputuser") inputUser: InputUser) {
    const newUser = User.create({
      city: inputUser.city,
      dept: inputUser.dept,
      name: inputUser.name,
    });

    const savedUser = await newUser.save();
    return savedUser;
  }

  @Query(() => User)
  async getUser(@Arg("id") id: string) {
    const user = await User.findOne(id);
    return user;
  }

    @Mutation(() => User)
  async updateUser(
    @Arg("id") id: string,
    @Arg("inputUser") inputUser: InputUser
  ) {
    let user = await User.findOne(id);
    if (!user) {
      throw new Error("User not found");
    }

    user.name = inputUser.name;
    user.dept = inputUser.dept;
    user.city = inputUser.city;

    const updatedUser = await user.save();
    return updatedUser;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: string) {
    const user = await User.findOne(id);
    if (!user) {
      throw new Error("User not found");
    }

    await user.remove();
    return true;
  }
}