import React from 'react'
import { Typography, Button, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';
// const { Title } = Typography;
const { TextArea } = Input;

const Continents = [ // 국가 리스트
    { key : 1, value : "Africa" },
    { key : 2, value : "Europe" },
    { key : 3, value : "Asia" },
    { key : 4, value : "North America" },
    { key : 5, value : "South America" },
    { key : 6, value : "Australia" },
    { key : 7, value : "Antarctica" },
]

function UploadProductPage() {

    const [Title, setTitle] = useState("")
    const [Obscription, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continent, setContinent] = useState(1)
    const [Image, setImages] = useState([])

    // 이미지를 입력할 수 있게 한다.

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

    const priceChangeHandler = (evnet) => {
        setPrice(event.currentTarget.value)
    }
    // 2
    // 입력을 가능할 수 있게 만들어준다.

    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value)
    };

    return (
        <div style={{ maxWidth : '700px', margin : '2rem auto'}}>
            <div style={{ textAlign : 'center', marginBottom : '2rem' }}>
                <Title level={2}> 여행 상품 업로드</Title>
            </div>

            <Form>
                {/* DropZone */}

                <FileUpload />

                <br />
                <br />
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={Title} />
                <br />
                <br />
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description} />
                <br />
                <br />
                <label>가격 ($)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price} />
                {/* 1 */}
                <br />
                <br /> 
                <select onChange={continentChangeHandler} value={3}> 
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}> {item.value}</option>
                    ))};

                    <option></option>
                </select>
                <br />
                <br />
                <Button>
                    확인
                </Button>
            </Form>
        
            <div>
                UploadProductPage입니다. 안녕하세요.
            </div>
        </div>
    )
}

export default UploadProductPage