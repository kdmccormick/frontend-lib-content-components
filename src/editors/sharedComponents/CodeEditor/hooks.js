import React, { useEffect } from 'react';

import { basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { html } from '@codemirror/lang-html';
import { xml } from '@codemirror/lang-xml';

import alphanumericMap from './constants';
import './index.scss';

const CODEMIRROR_LANGUAGES = { HTML: 'html', XML: 'xml' };

export const state = {
  showBtnEscapeHTML: (val) => React.useState(val),
};

export const prepareShowBtnEscapeHTML = () => {
  const [visibility, setVisibility] = state.showBtnEscapeHTML(true);
  const hide = () => setVisibility(false);
  return { showBtnEscapeHTML: visibility, hideBtn: hide };
};

export const cleanHTML = ({ initialText }) => {
  const translateRegex = new RegExp(`&(${Object.keys(alphanumericMap).join('|')});`, 'g');
  const translator = ($0, $1) => alphanumericMap[$1];
  return initialText.replace(translateRegex, translator);
};

export const createCodeMirrorDomNode = ({
  ref,
  initialText,
  upstreamRef,
  lang,
}) => {
  useEffect(() => {
    const languageExtension = lang === CODEMIRROR_LANGUAGES.HTML ? html() : xml();
    const cleanText = cleanHTML({ initialText });
    const newState = EditorState.create({
      doc: cleanText,
      extensions: [basicSetup, languageExtension, EditorView.lineWrapping],
    });
    const view = new EditorView({ state: newState, parent: ref.current });
    // eslint-disable-next-line no-param-reassign
    upstreamRef.current = view;
    view.focus();

    return () => {
      // called on cleanup
      view.destroy();
    };
  }, []);
};

export const escapeHTMLSpecialChars = ({ ref, hideBtn }) => {
  const text = ref.current.state.doc.toString();
  let pos = 0;
  const changes = [];
  Object.keys(alphanumericMap).forEach(
    (escapedKeyword) => {
      // eslint-disable-next-line no-cond-assign
      for (let next; (next = text.indexOf(alphanumericMap[escapedKeyword], pos)) > -1;) {
        changes.push({ from: next, to: next + 1, insert: `&${escapedKeyword};` });
        pos = next + 1;
      }
    },
  );

  ref.current.dispatch({ changes });
  hideBtn();
};