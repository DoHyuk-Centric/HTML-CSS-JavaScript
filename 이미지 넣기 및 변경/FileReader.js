document.getElementById('input').addEventListener('change', (e) => {
    const fileReader = new FileReader(); // FileReader() 객체 생성
    fileReader.readAsDataURL(e.target.files[0]); // 

    fileReader.onload = (e) => {
        let base64data = fileReader.result;
        document.getElementById('img_result').src = base64data;
    }
})