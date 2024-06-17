import chenImg from "../chen/img/chen.jpg";
import liuImg from "../liu/img/liu.png";
import zhengImg from "../zheng/img/zheng.png";
import chenjob from "./jobCard.png";
import liuzhengjob from "./jobCard2.png";

const data = {
    "member": [
    {
        "name": "陳佳妤",
        "linkedin": "https://www.linkedin.com/in/susanchen-info",
        "img": chenImg,
        "about": {
            "skill": " 深度學習 系統分析 軟體開發",
            "school": " 中央大學 資訊管理學系",
            "email": "  chen027@g.ncu.edu.tw",
            "subject": [
                {
                    "title": "電子商務",
                    "reason": "在課程中學習到各種與電子商務相關的知識，並且透過case study，從實際案例中學習到如何運用資訊科技來提升企業的競爭力。"   
                },
                {
                    "title": "電子商務技術",
                    "reason": "在課程中學習到資料探勘的各種演算法，以及一些機器學習的方法，從最底層的技術，去分析大量的資料，找出資料中的規則與趨勢，進而提供企業做出更好的決策。"
                },
                {
                    "title": "演算法",
                    "reason": "在課程中學習到各種演算法，從最基礎的排序演算法，到圖論、動態規劃等較為複雜的演算法，透過這些課程，讓我對於演算法有了更深入的了解。"
                }
            ]
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
        "linkedin": "https://www.linkedin.com/in/hung-yi-liu-a05b9521b/",
        "img": liuImg,
        "about": {
            "skill": " 軟體開發 網頁程式設計",
            "school": " 中央大學 資訊工程學系",
            "email": "  ppodds@g.ncu.edu.tw",
            "subject": [
                {
                    "title": "物件導向",
                    "reason": "物件導向分析將現實會遇到的問題化位各種物件的關係來解決問題，學習後對問題的解決方案分析有了新的思考方向。"   
                },
                {
                    "title": "電腦攻防",
                    "reason": "電腦攻防涵蓋各種計算機科學中不同領域的知識，學習後各領域都有更深刻的理解。"
                },
                {
                    "title": "作業系統實作",
                    "reason": "作業系統實作整合了過去學過的所有知識，並在實作中大量運用，加深了知識的理解程度。"
                }
            ]
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
        "linkedin": "https://www.linkedin.com/in/susanchen-info",
        "img": zhengImg,
        "about": {
            "skill": " 數位行銷 影音傳播",
            "school": " 中央大學  企業管理學系",
            "email": "  pheschc70512@gmail.com",
            "subject": [
                {
                    "title": "財務管理",
                    "reason": "財務管理的知識和技能可以應用於各個行業和不同規模的企業，具有很強的實用性。"   
                },
                {
                    "title": "生產管理",
                    "reason": "生產管理是直接關係到產品生產流程和效率的管理領域，需要對生產環節進行全面規劃和控制，具有實踐性和操作性。"
                },
                {
                    "title": "行銷管理",
                    "reason": "行銷管理涉及到市場分析、產品定位、推廣策略等方面，需要不斷創新和嘗試新的行銷方法和策略。"
                }
            ]
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