class ErroHandeler extends Error{
    constructor(status_code, message){
        super(message);
        this.statusCode = status_code;
    }
}

export default ErroHandeler;