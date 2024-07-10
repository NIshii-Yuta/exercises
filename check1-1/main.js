

class User {
    // 名前とメールアドレスのプロパティを持ったコンストラクタを作成してください。
    constructor(){
        this.name = name;
        this.email = email;
    }
}

// ユーザー情報を保存する配列を作成してください。
let users =[];
// ユーザー情報を登録する関数を作成してください。
function registerUser() {
    // nameフィールドの値を取得してください
    let name = document.getElementById('name').value;
    // emailフィールドの値を取得してください。
    let email = document.getElementById('email').value;
    // 登録されているユーザーを取得してください。
    
    // メールアドレスの重複を確認してください。
    // 既に登録済みの場合、登録しようとしたメールアドレスをを含む重複している旨のメッセージを出力してください。
    // 未登録の場合はユーザー情報を配列に追加してください。    
    let existingUser = users.find(use => users.email === email);
    if(existingUser){
        alert(`メールアドレス ${email} は既に登録されています。`);
        return;
    }
    let newUser =new User(name,email);
    users.push(newUser);
    // 登録後にnameフィールドの値を削除してください
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    console.log('ユーザーが登録されました:', newUser) ;
    // 登録後にemailフィールドの値を削除してください
}

// 登録されたユーザー情報を1件ずつコンソール出力する関数を作成してください。
function findUser() {
    console.log('登録されているユーザー:');
    users.forEach(user =>{
            console.log(`名前: ${user.name},メールアドレス:${user.email}`);
    });
    
}