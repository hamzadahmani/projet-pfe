const AuthRoutes = (user) => <div>
    {!user && <Login />}
    {user && user.role === 'admin' && <Admin />}
    {user && user.role === 'client' && <Client />}
</div>

const mapStateToProps = state => ({
    user: state.user
})

const ConnectedAuthRoutes = (mapStateToProps)(AuthRoutes)