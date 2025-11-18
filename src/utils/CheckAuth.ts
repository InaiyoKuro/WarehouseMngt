const isAuthenticated = () => {
   return localStorage.getItem("isLoggedIn") === "true"
}

export { isAuthenticated }