pragma solidity ^0.4.17;

contract Test{
    
    string private mesg ;
    int private intData;

    function Test() public {
        mesg = 'default msg';
        intData = 1;
    }
    
    function getMsg()public view returns(string memory){
        return mesg;
    }
    
    function getData()public view returns(int){
        return intData;
    }
    
    function setMsg(string _msg)public{
        mesg = _msg;
    }
    
    function setData(int _newData)public{
        intData = _newData;
    }   
}