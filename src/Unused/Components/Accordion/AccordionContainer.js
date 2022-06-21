import React from 'react';
import { Accordion } from 'xbrcl';

/**
 * Accordion component
 * @component
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Accordion component
 * @example
 * const title = 'Title'
 * const subTitle = 'Sub title'
 * const expanded = boolean
 * const disabled = boolean
 * const expandIcon = boolean
 * return (
 *          <Accordion
 *            title='Accordion Title'
 *            subTitle='Sub Title'
 *            expanded={expanded}
 *            handleChange={handleChange}
 *            expandIcon
 *            disabled
 *           >
 *              Children
 *           </Accordion>
 *         )
 */

const AccordionContainer = () => {
  const [expanded, setExpanded] = React.useState(false);

  /**
   * return event on selecting any list item.
   * @param   {event} event  event triggered by user
   * @param   {boolean} newExpanded  boolean value for accordion expanded or not
   */

  const handleOnChange = () => (event, expendedState) => {
    setExpanded(expendedState);
  };

  return (
    <div>
      <h3>Accordion:</h3>
      <Accordion
        title='Accordion Title'
        // subTitle='Sub Title'
        expanded={expanded}
        handleOnChange={handleOnChange}
        expandIcon
        style={{ maxWidth: '400px' }}
        disabled
      >
        Children
      </Accordion>
    </div>
  );
};

export default AccordionContainer;
