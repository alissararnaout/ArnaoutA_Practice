export default {
        template: `
        <section>
            <h1>Welcome to main page</h1>
       
            <form id="my-form">
                <label for="username">Enter Username:</label>
                <input v-model="uname" type="text" name="username" required placeholder="username">

            <label for="password">Enter Password:</label>
            <input v-model="pword" type="password" name="password" required placeholder="password">

            <input @click="submitData" type="submit" value="Submit">
        </form>
        </section>
        `, // need to wrap everything in a section - or else will get compiling error

    data: function() { // data binding
        return {
            uname: "",
            pword: ""

        }
    },

    methods: {
        submitData() {
            // hit an api with a fetch call
            // refer to the mailForm example -> node mailer setup
        }
    }
}