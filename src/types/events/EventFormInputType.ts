type EventFormInputType = Event &
    {target: HTMLFormElement &
    [input: HTMLInputElement]};

export default EventFormInputType;
