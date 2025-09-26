
export default function Like({liked, onLike}) {
    const classes = "cursor-pointer pointer fa fa-heart"+ (liked? "-o":"")
    return (
        <i onClick={onLike} className={classes}></i>
    )
}