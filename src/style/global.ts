import styled from "styled-components";

export const Container = styled.header`
    .parent{
        display: flex;
    }

    .sidebar{
        width:20%;
        height: 100%;
        position: fixed;
        background-color: #512679;
    }

    .sidebar-pos{
        position: absolute;
        top: 30%;
        transform:translateY(-30%);
    }

    .img-sidebar{text-align: center;}

    .img-sidebar img{
        width: 80%;
        border:8px solid #62318e;
        border-radius: 20%;
    }

    .menu{
        margin:1.25rem 0;
        text-align: center;
    }

    .menu a{
        color: white;
        opacity: 0.4;
        font-size: 2rem;
        display: block;
        margin-bottom: 1.25rem;
        text-decoration: none;
    }

    .menu a.selected{
       opacity: 0.4;
    }

    .content{
        position:absolute;
        left: 20%;
        width: 80%;
        height: 100%;
        overflow-y:auto;
        padding:0 3%;
    }

    section.descricao{
        position: relative;
        top:2rem;
    }

    section.descricao h2{
        color:#62318e;
        font-size: 3.5rem;
    }

    section.descricao h2 > span,
    section.descricao h3 > span,
    section.descricao h4 > span
    {
        color:  #62318e;
    }

    section.descricao h3{
        margin-top:1.875rem;
        color: #6c757d;
        font-size: 2rem;
    }

    section.descricao h4{
        color: #6c757d;
        font-size: 1.8rem;
    }

    section.descricao p{
        color:#6c757d;
        font-size:2.5rem;
        margin-top:1.5rem;
    }

    .icons-social{
        margin-top: 1rem;
    }

    .icons-social a{
        text-decoration:none;
        color: white;
        background-color: #62318e;
        width:2.5rem;
        height:2.5rem;
        border-radius:1.2rem;
        display: inline-block;
        margin:0 0.6rem;
        text-align: center;
    }

    .icons-social i{
        line-height: 3.8rem;

        svg {
            height: 2rem;
            width: 2rem;
        }
    }
`;