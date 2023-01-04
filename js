 if (result.data) {
            this.data = result.data;
            console.log('Data check-->'+JSON.stringify(this.data));
			let tempRecords = JSON.parse( JSON.stringify( this.data ) );
            tempRecords = tempRecords.map( row => {
                return {...row, Name: row.Account.Name, UserName : row.User.Name};
            })
            this.records = tempRecords;
            this.error = undefined;
            
        } 
