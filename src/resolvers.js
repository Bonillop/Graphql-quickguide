import { tasks } from './sample';
import User from './models/User';
// The resolvers have the logic of the actions exposed by the schema 
export const resolvers = {
  Query: {
    hello() {
      return "Hello world with Graphql";
    },
    greet(root, args, ctx) {
      console.log(ctx)
      return `Hello ${args.name}`;
    },
    tasks(root, args) {
      return tasks;
    },
    async users(root, args) {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.log(error);
      }
    }
  },
  Mutation: {
    createTask(_, { input }) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    },
    async createUser(_, { input }) {
      const newUser = new User(input);
      try {
        await newUser.save();
        return newUser;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser(_, { _id }) {
      try {
        const user = await User.findByIdAndDelete(_id);
        return user
      } catch (error) {
        console.log(error)
      }
    },
    async updateUser(_, { _id, input }) {
      try {
        const updatedUser = User.findByIdAndUpdate(_id, input, { new: true });
        return updatedUser;
      } catch (error) {
        console.log(error);
      }
    }
  }
}