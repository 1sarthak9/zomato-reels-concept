const ImageKit= require("imagekit");

const imagekit=new ImageKit({
    publicKey:process.env.ImageKit_PUBLIC_KEY,
    privateKey:process.env.ImageKit_PRIVATE_KEY,
    urlEndpoint:process.env.ImageKit_URL_ENDPOINT
});

async function uploadFile(file,fileName) {
    const result=await imagekit.upload({
        file:file,
        fileName:fileName
    })
    return result;

}

module.exports={
    uploadFile
}