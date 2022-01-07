import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {/*
                    NOTE: each Collection Preview get rendered, filter & map function also will run
                    it cause performance issues if data is large
                */}
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(item => (
                        <div key={item.id}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview
