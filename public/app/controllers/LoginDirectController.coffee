class App.LoginDirectController extends Monocle.Controller

    constructor: ->
        super

        if App.Utils.online()
            user = App.Storage.users[0]
            p = App.Connector.login user
            p.done =>
                App.Delegate.boot()
                Lungo.Router.section '#activity'
            p.fail (xhr) =>
                console.log xhr
                # App.Utils.showError App.Messages.AuthenticationFailed
                App.Utils.fail xhr
                Lungo.Router.section "#login-form"
        else
            @onSuccess()    # Create the rest of app modules, but with offline data
