import chenImg from "../chen/img/chen.jpg";
import liuImg from "../liu/img/liu.png";
import zhengImg from "../zheng/img/zheng.png";
import chenjob from "./jobCard.png";
import liuzhengjob from "./jobCard2.png";

const data = {
    "member": [
    {
        "name": "陳佳妤",
        "img": chenImg,
        "about": {
            "skill": "  深度學習 系統分析 軟體開發",
            "school": "  中央大學 資訊管理學系",
            "email": "  chen027@g.ncu.edu.tw"
        },
        "highlight": {
            "title": "InnoServe資服創新競賽 產學合作組二\n【第一名】",
            "content": "大四上參加了此競賽，在團隊中負責系統的全端開發及雲端伺服器部屬，幫助工廠達到污水處理流程透明化，並與不同學校學生一同切磋進步。"
        },
        "job": {
            "dots": chenjob,
            "section": [
                {
                    "title": "資訊管理課程助教",
                    "period": "2024/02 - now"
                },
                {
                    "title": "程式設計課程助教",
                    "period": "2023/09 - 2024/01"
                },
                {
                    "title": "大一英文課程助教",
                    "period": "2022/09 - 2023/06"
                },
                {
                    "title": "短期研究助理",
                    "period": "2022/06 - 2022/07"
                }
            ]
        }
    }, 
    {
        "name": "劉泓毅",
        "img": liuImg,
        "about": {
            "skill": "  軟體開發 網頁程式設計",
            "school": "  中央大學 資訊工程學系",
            "email": "  ppodds@g.ncu.edu.tw"
        },
        "highlight": {
            "title": "\n新竹梅竹黑客松梅竹大獎【第二名】",
            "content": "大二下時參與該競賽，負責系統的程式開發、自動化流程及伺服器建置。最終作品可以幫助投資者判斷自身的投資策略成效。"
        },
        "job": {
            "dots": liuzhengjob,
            "section": [
                {
                    "title": "\n中央大學總務處事務組網管",
                    "period": "2021/12 - now"
                },
                {
                    "title": "中央大學資訊工程系網管",
                    "period": "2023/02 - now"
                },
                {
                    "title": "趨勢科技 Software Intern",
                    "period": "2023/07 - 2023/08"
                },
            ]
        }
    },
    {
        "name": "鄭彩纓",
        "img": zhengImg,
        "about": {
            "skill": "  數位行銷 影音傳播",
            "school": "  中央大學  企業管理學系",
            "email": "  pheschc70512@gmail.com"
        },
        "highlight": {
            "title": "\n上奧地利應用科技大學 交換",
            "content": "大三下學期選擇出國交換，利用這段期間，走訪了25個國家，感受不同文化的價值，同時也看見舒適圈外更遼闊的世界。"
        },
        "job": {
            "dots": liuzhengjob,
            "section": [
                {
                    "title": "\n           Crypto Arsenal UI/UX intern",
                    "period": "                 2023/12- 2024/03"
                },
                {
                    "title": "           錨點影音  數位行銷實習生",
                    "period": "                2023/09- 2023/10"
                },
                {
                    "title": "           104 人力銀行  Young Giver 社群組",
                    "period": "                2022/08- 2023/01"
                },
            ]
        }
    }
    ]
}

export default data;