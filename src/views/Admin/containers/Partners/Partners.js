import React, { useEffect, useState } from "react";
import { Table, Checkbox, Modal } from "antd";
import { StyledPartners } from "./Partners.style";

function Partners() {
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(true);

  const closeModal = () => {
    setIsVisible(false);
    setModalData(null);
  };
  const openModal = () => {
    setIsVisible(true);
  };
  const columns = [
    {
      dataIndex: "compName",
      render: (text, record) => (
        <td className="ant-table-cell" onClick={() => getCompInfo(record.id)}>
          {text}
        </td>
      ),
    },
    {
      dataIndex: "hasAccess",
      render: (text, record) => (
        <Checkbox onChange={() => handleAccess(record.id)} checked={text} />
      ),
    },
  ];
  useEffect(() => {
    setData([
      {
        id: "1",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "2",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "3",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "4",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "5",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "6",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "7",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
      {
        id: "8",
        compName: "ООО TEST TEST TEST TEST TEST TEST TEST",
        hasAccess: true,
      },
    ]);
    setLoading(false);
  }, []);

  const handleAccess = (id) => {
    setData(
      data.map((item) => {
        if (item.id == id) item.hasAccess = !item.hasAccess;
        return item;
      })
    );
  };

  const getCompInfo = (id) => {
    data.map((item) => {
      if (item.id == id) {
        setModalData(item);
      }
      setTimeout(() => {
        console.log(modalData);
    }, 300);
    });
    
    // openModal();
  };
  return (
    <StyledPartners>
      <div className="wrapper">
        <header>
          <h1>Партнеры</h1>
        </header>
        <Table
          thead={false}
          columns={columns}
          dataSource={data}
          loading={loading}
        />
        <Modal visible={isVisible} footer={null} onCancel={closeModal}></Modal>
      </div>
    </StyledPartners>
  );
}

export default Partners;
