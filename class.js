const firstName = "Yagnesh";

// firstName.

// const lastName = "Modh";

// // es6 onwards

// // to bind "related information"
// const self = {
//     firstName,
//     lastName,
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     address: {
//         line1: 'ahmedabad',
//         line2: 'gujarat',
//         pinCode: '123324',
//     },
//     project: [
//         {
//             name: 'react project'
//         }
//     ]
// }

// PUBLIC
// PRIVATE



    class userInfo {
        static profession = 'cricketer';
        // call only only once during initialization
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName
            // this.timer = this.timer.bind(this);
        }

        // getter & setter
        set firstName(value) {
            const firstLetter = value.slice(0, 1);
            const restLetters = value.slice(1);
            this._firstName = `${firstLetter.toUpperCase()}${restLetters}`;
        }

        get firstName() {
            return this._firstName;
        }

        set lastName(value) {
            const firstLetter = value.slice(0, 1);
            const restLetters = value.slice(1);
            this._lastName = `${firstLetter.toUpperCase()}${restLetters}`;
        }

        get lastName() {
            return this._lastName;
        }

        getProfession() {
            return 'cricketer';
        }

        changeName() {
            this.firstName = 'virat';
        }

        getBankBalance() {
            return 1000;
        }

        getGender = () => {
            return this.gender;
        }

        getStatus() {
            if(this.getBankBalance() < 500) {
                return 'poor'
            } else {
                return 'rich';
            }
        }

        timer = () => {
            console.log(this.firstName);
        }


        // method
        getFullName = () => {
            // const self = this;
            setTimeout(this.timer, 0)
            
            return `${this.firstName} ${this.lastName}`
        }
    }

    // inharitance
    class ManagerInfo extends userInfo {
        constructor(firstName, lastName) {
            super(firstName, lastName);
        }

        getProfession() {
            return 'Manager';
        }

        getManagerStatus() {
            const status = super.getStatus();
            console.log(status);
            return `Manger is ${status}`
        }
        
    }
    
    
    const m = new ManagerInfo('ravi', 'shastri');
    console.log(m.firstName);
    console.log(m.getBankBalance());
    console.log(m.getProfession());
    console.log(m.getManagerStatus());

    // console.log(userInfo.getProfession());
    console.log(userInfo.profession);

    const self = new userInfo('yagnesh', 'modh')
    const rohitInfo = new userInfo('rohit', 'sharma')

    console.log(self.firstName);
    console.log(self.lastName);
    console.log(self.changeName());
    console.log(self.getFullName());
    console.log(self.getGender());
    console.log(self.getProfession());

    console.log(rohitInfo.firstName);
    console.log(rohitInfo.lastName);
    console.log(rohitInfo.getFullName());
    console.log(rohitInfo.getStatus());

    

