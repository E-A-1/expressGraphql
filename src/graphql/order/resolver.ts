import OrderService from "../../services/order.service";
const orderResolvers = {
  Query: {
    posts(root: any, args: any, context: any) {
      console.log(root);
      console.log(args);
      console.log(context);
      return OrderService.getOrders();
    },
  },
  Mutation: {
    upvotePost(id: any) {
      return OrderService.saveOrders();
    },
  },
};

export default orderResolvers;
