import './GameRestart.css';

const GameRestart = (props) => {
    return (
        <section className='restart-section'>
            <div className='restart background-semi-dark grid grid--content-center grid--gap'>
                <h1 className='restart__heading font-size-500 text-silver'>Restart Game?</h1>
                <div className='restart__buttons-wrapper flex flex--justify-center flex--align-center flex--gap'>
                    <button className='restart__btn btn btn--silver' onClick={props.onCancel}>No, Cancel</button>
                    <button className='restart__btn btn btn--yellow' onClick={props.onRestart}>Yes, Restart</button>
                </div>
            </div>
        </section>
    );
};

export default GameRestart;