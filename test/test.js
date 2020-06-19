const comFile=require('../compile');
const assert=require('assert');
const Web3=require('web3');
const ganaurl='http://127.0.0.1:7545';
const web3=new Web3(ganaurl);

var allAccounts;
var deployCon;
beforeEach(async()=>{
allAccounts=await web3.eth.getAccounts();
deployCon= await new web3.eth.Contract(JSON.parse(comFile.interface))
.deploy({ data:comFile.bytecode,arguments:[]})
.send({from:allAccounts[0],gas:'1000000'});
});

describe('This is a Testing....',()=>{
    it('Contract Deployed Testing...',()=>{
        assert.ok(deployCon._address);
    });
    it('Intialized Value of Mesg..',async()=>{
        assert.equal('default msg',await deployCon.methods.getMsg().call());
    });
    it('Intialized Value of Data..',async()=>{
        assert.equal('1',await deployCon.methods.getData().call());
    });
    it('Change the Value of Mesg....',async()=>{
        assert.ok(await deployCon.methods.setMsg('Bilash').send({from:allAccounts[0]}));
    });
    it('Change the Value of DataVariable....',async()=>{
        assert.ok(await deployCon.methods.setData(5).send({from:allAccounts[0]}));
    });



});



//console.log(web3);


