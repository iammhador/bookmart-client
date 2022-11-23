//# Bonus Part :

1. Your Readme file for the client-side repo should have details about your project's features and functionalities in bullet points(at least five bullet points) and your live link. Adding a meaningful readme file for the server-side repo is optional.

2. At least 16 meaningful GitHub commits for the client side and 9 meaningful commits for the server-side repository. Your code should be clean and organized. Comments should be added where necessary

3. Add a meaningful favicon. If data is loading, a spinner will be displayed. When you are loading data by using a loader, make sure you have added a route.

4. Implement an extra feature: **WishList** or **Report to Admin**(choose one) in the /category/:id route. A buyer can make a product to his/her wishlist or report an item by clicking a relevant button. If you have implemented the wishlist feature, show them in the buyer's Dashboard in a separate route, "My WishList." A user should be able to purchase the item from the wishlist page. (Just redirect the user to the purchase page)

   If you have implemented the "report to admin" feature, show the reported items in the admin dashboard in a separate route, "Reported Items" (tips: create a separate collection for the wish list and filter by user email address). An admin will be able to delete a reported item.

5. Implement the basic version of the JWT token for email/password-based authentication. Upon social login, registration, and login, you will create a JWT token and store it on the client side. You will send the token for my orders, buyers, and advertisements routes and verify the user.

6. The **all-sellers** route will have a name, email address, delete button, and verify button. Admin will be able to verify a seller. When clicked on the verify button, the seller's status will change from unverified to verified(show a blue tick when the seller is verified), and this status will be shown on the products added by a verified seller.

7. The **My Orders** route will have a table/cards. Each card/ table row will be an order having an image, title, price, and a pay button. On clicking the pay button, to take the user the payment page with fields for card details will pop up, or the user will be taken to a route where there will be a form for filling up card details. Save the payment information in the database and inform the user via a modal/toast. Don't forget to update the button text to "paid" after payment. Please note, payment will be done by Stripe.

   Once an item is paid, it won't be displayed on the advertised item or on the category page. Only available items will be displayed to be purchased.

8. Use react query for at least two API calls.Use Axios for at least one API call

9. Most likely framework will do it for you. However do not forget to make your entire website responsive. (It is ok if the table is not responsive.) please note, all the pages including dashboard will be responsive.

10. Database collection names, routes, mongdb features/operators when needed, api naming convension and best practices.