import axios from 'axios'


// Todo 목록 가져오기
export async function Select_TodoList() {
    try {
        const response = await axios.get("/api/todos/");
        return response.data;
    } catch (err) {
        alert(err);
    }
}

// Todo 입력, 수정 하기
export async function Update_TodoList(item) {
    try {
        if (item.id) {
            await axios
                    .put(`/api/todos/${item.id}/`, item)
        }
        else {
            await axios
                    .post('/api/todos/', item)
        }
    } catch (err) {
        alert(true)
    }
}


// Todo 삭제하기
export async function Delete_TodoList(item) {
    try {
        await axios
                .delete(`/api/todos/${item.id}/`)
    } catch (err) {
        alert(true)
    }
}
