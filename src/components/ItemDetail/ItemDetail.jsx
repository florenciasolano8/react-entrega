/* eslint-disable react/prop-types */

function ItemDetail({ detail }) {

    return (
        <div>
            <p>{detail?.name}</p>
            <p>{detail?.price}</p>
            <p>{detail?.description}</p>
        </div>
    );
}

export default ItemDetail;
