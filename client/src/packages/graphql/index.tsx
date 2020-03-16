import React from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';

const createMessage = gql`mutation {
  createMessage(input: {
    author: "andy",
    content: "hope is a good thing",
  }) {
    id
  }
}`
const searchMessageList = gql`query{
  getMessageList{
    content,
    author,
    id
  }
}`;

interface IList {
  id: string;
  content: string;
  author: string;
}

const genList = (lists: IList[]) => {
  return Array.from(lists, (list: IList, idx: number) => {
    return <div key={idx}>{list.id} && {list.author} && {list.content}</div>
  })
}

const GraphQL = () => {
  let contentSplit: any;
  // 使用 useQuery hook 获取数据
  const [createOne] = useMutation(createMessage);
  const { data = {
    getMessageList: []
  } } = useQuery(searchMessageList);
  const onCreateOne = () => {
    createOne();
  }
  return <div onClick={onCreateOne}>
    hello GraphQL1
    <img src="./logo192.png" alt="" />
    {genList(data.getMessageList)}
  </div>
}

export default GraphQL;