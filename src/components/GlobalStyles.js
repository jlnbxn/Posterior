import React from 'react';
import '@fontsource/roboto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';

import { Global, css } from '@emotion/react';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        body,
        html {
          width: 100%;
          height: 100%;
        }

        input::-ms-clear,
        input::-ms-reveal {
          display: none;
        }

        *,
        :after,
        :before {
          box-sizing: border-box;
        }

        html {
          font-family: 'Roboto', sans-serif;
          line-height: 1.15;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          -ms-overflow-style: scrollbar;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        @-ms-viewport {
          width: device-width;
        }

        article,
        aside,
        blockquote,
        body,
        button,
        code,
        dd,
        details,
        div,
        dl,
        dt,
        fieldset,
        figcaption,
        figure,
        footer,
        form,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        header,
        hgroup,
        hr,
        input,
        legend,
        li,
        menu,
        nav,
        ol,
        p,
        pre,
        section,
        td,
        textarea,
        th,
        ul {
          margin: 0;
          padding: 0;
        }
        ol,
        ul {
          list-style: none;
        }

        /* fix for safari on ios so it doesnt zoom on select or input */
        input[type='color'],
        input[type='date'],
        input[type='datetime'],
        input[type='datetime-local'],
        input[type='email'],
        input[type='month'],
        input[type='number'],
        input[type='password'],
        input[type='search'],
        input[type='tel'],
        input[type='text'],
        input[type='time'],
        input[type='url'],
        input[type='week'],
        select:focus,
        textarea {
          font-size: 16px;
        }

        .anticon {
          line-height: inherit;
          svg {
            width: 1em;
            height: 1em;
            fill: currentColor;
            vertical-align: middle;
          }
        }

        .ant-select-dropdown {
          padding: 0;
          border: 1px solid #dfdcda;
          border-radius: 0;
          background: #fff;
          box-shadow: none;
          z-index: 90;
          font-weight: 300;
          font-family: Roboto, Arial, Helvetica, clean, sans-serif;
          font-size: 14px;
          letter-spacing: 0.5px;
        }

        .ant-select-dropdown .ant-select-item-option {
          padding: 5px 12px;
          font-weight: 300;
          line-height: 40px;
        }

        .ant-select-item-option:hover {
          background: #c0bff9;
        }

        .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
          color: #343434;

          background-color: #eae6ff;
        }

        .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
          background-color: #f5f5f5;
        }

        .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
          color: #343434;
          font-weight: undefined;
          background-color: #eae6ff;
        }

        .ant-select-dropdown
          .ant-select-item-option.ant-select-item-option-selected,
        .ant-select-dropdown .ant-select-item-option:hover {
          background: #c0bff9;
        }

        /* .anticon {
            margin-right: 0;
    padding: 0 4px;
    line-height: 50px;
    font-size: 18px;
color:     #343434;
svg {
    width: 1em;
    height: 1em;
    fill: currentColor;
    margin-top: -4px;
    vertical-align: middle;
}
        }

        .ant-btn {
            color: #fff;
    border-color: #222;
    background: #222;
        }

        .ant-btn-icon-only {
            color: #222;
    border: none;
    background: transparent;
    box-shadow: none;


        }

        .ant-slider {
    margin-left: 20px;
    margin-top: 14px;
    touch-action: pan-y;

    // Added this because of react-slick touch handling not optimised for React v17
    // Please remove and test once antd is updated to v4

    .slick-list, .slick-track {
      touch-action: pan-y;
    }

    &:hover {
      .ant-slider-rail {
        background-color: #b6b5b1;
      }

      .ant-slider-dot {
        border-color: #b6b5b1;
      }
    }

    .ant-slider-rail {
      transition: none;
      background-color: #dfdcda;
    }

    .ant-slider-dot {
      border-color: #dfdcda;
    }

    .ant-slider-track {
      background-color: #222222;
      transition: none;
      touch-action: pan-y;
    }
    .ant-slider-handle:focus {
      box-shadow: 0 0 0 5px #222222;
    }

    &:hover .ant-slider-track {
      background-color: #222222;
    }

    &:hover .ant-slider-handle:not(.ant-tooltip-open) {
      border-color: #222222;
    }

    &:hover .ant-slider-handle-click-focused,
    &:hover .ant-slider-handle-click-focused:focus {
      box-shadow: none ;
      border-color: #222222;
    }

    .ant-slider:hover .ant-slider-handle, 
    .ant-slider-handle,
    .ant-slider-dot.ant-slider-dot-active {
      border-color: #222222;
    }

    .ant-slider-handle-dragging.ant-slider-handle-dragging.ant-slider-handle-dragging {
  border-color:  #222222;
  box-shadow: none ;
}

    .ant-slider-handle-dragging {
        border-color: #222222;
    }


    
    .ant-slider-handle:active,
    .ant-slider-handle:focus {
      box-shadow: none;
    }

    .ant-slider-mark {
      .slider-mark-text {
   
        font-size: 13px;
        text-transform: uppercase;
      }
    }
  }

  .ant-slider-with-marks {
        margin-bottom: 0;
    } */

        body {
          margin: 0;
          font-variant: tabular-nums;
          line-height: 1.5715;
          background-color: #fff;
          font-feature-settings: 'tnum';
        }

        [tabindex='-1']:focus {
          outline: none !important;
        }

        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin-top: 0;
          margin-bottom: 0.5em;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
        }

        p {
          margin-top: 0;
          margin-bottom: 1em;
        }

        abbr[data-original-title],
        abbr[title] {
          text-decoration: underline;
          text-decoration: underline dotted;
          border-bottom: 0;
          cursor: help;
        }

        address {
          margin-bottom: 1em;
          font-style: normal;
          line-height: inherit;
        }

        input[type='number'],
        input[type='password'],
        input[type='text'],
        textarea {
          -webkit-appearance: none;
        }

        dl,
        ol,
        ul {
          margin-top: 0;
          margin-bottom: 0;
        }

        ol ol,
        ol ul,
        ul ol,
        ul ul {
          margin-bottom: 0;
        }

        dt {
          font-weight: 500;
        }

        dd {
          margin-bottom: 0.5em;
          margin-left: 0;
        }

        blockquote {
          margin: 0 0 1em;
        }

        dfn {
          font-style: italic;
        }

        b,
        strong {
          font-weight: bolder;
        }

        small {
          font-size: 80%;
        }

        sub,
        sup {
          position: relative;
          font-size: 75%;
          line-height: 0;
          vertical-align: baseline;
        }

        sub {
          bottom: -0.25em;
        }

        sup {
          top: -0.5em;
        }

        a {
          color: #0500e8;
          text-decoration: none;
          background-color: transparent;
          outline: none;
          cursor: pointer;
          transition: color 0.3s;
          -webkit-text-decoration-skip: objects;
        }

        a:hover {
          color: #3127f5;
        }

        a:active {
          color: #0003c2;
        }

        a:active,
        a:focus,
        a:hover {
          text-decoration: none;
          outline: 0;
        }

        a[disabled] {
          color: rgba(0, 0, 0, 0.25);
          cursor: not-allowed;
          pointer-events: none;
        }

        code,
        kbd,
        pre,
        samp {
          font-size: 1em;
          font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
            monospace;
        }

        pre {
          margin-top: 0;
          margin-bottom: 1em;
          overflow: auto;
        }

        figure {
          margin: 0 0 1em;
        }

        img {
          vertical-align: middle;
          border-style: none;
        }

        svg:not(:root) {
          overflow: hidden;
        }

        [role='button'],
        a,
        area,
        button,
        input:not([type='range']),
        label,
        select,
        summary,
        textarea {
          touch-action: manipulation;
        }

        table {
          border-collapse: collapse;
        }

        caption {
          padding-top: 0.75em;
          padding-bottom: 0.3em;
          color: rgba(0, 0, 0, 0.45);
          text-align: left;
          caption-side: bottom;
        }

        th {
          text-align: inherit;
        }

        button,
        input,
        optgroup,
        select,
        textarea {
          margin: 0;
          color: inherit;
          font-size: inherit;
          font-family: inherit;
          line-height: inherit;
        }

        button,
        input {
          overflow: visible;
        }

        button,
        select {
          text-transform: none;
        }

        [type='reset'],
        [type='submit'],
        button,
        html [type='button'] {
          -webkit-appearance: button;
        }

        [type='button']::-moz-focus-inner,
        [type='reset']::-moz-focus-inner,
        [type='submit']::-moz-focus-inner,
        button::-moz-focus-inner {
          padding: 0;
          border-style: none;
        }

        input[type='checkbox'],
        input[type='radio'] {
          box-sizing: border-box;
          padding: 0;
        }

        input[type='date'],
        input[type='datetime-local'],
        input[type='month'],
        input[type='time'] {
          -webkit-appearance: listbox;
        }

        textarea {
          overflow: auto;
          resize: vertical;
        }

        fieldset {
          min-width: 0;
          margin: 0;
          padding: 0;
          border: 0;
        }

        legend {
          display: block;
          width: 100%;
          max-width: 100%;
          margin-bottom: 0.5em;
          padding: 0;
          color: inherit;
          font-size: 1.5em;
          line-height: inherit;
          white-space: normal;
        }

        progress {
          vertical-align: baseline;
        }

        [type='number']::-webkit-inner-spin-button,
        [type='number']::-webkit-outer-spin-button {
          height: auto;
        }

        [type='search'] {
          outline-offset: -2px;
          -webkit-appearance: none;
        }

        [type='search']::-webkit-search-cancel-button,
        [type='search']::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        ::-webkit-file-upload-button {
          font: inherit;
          -webkit-appearance: button;
        }

        output {
          display: inline-block;
        }

        summary {
          display: list-item;
        }

        template {
          display: none;
        }

        [hidden] {
          display: none !important;
        }

        mark {
          padding: 0.2em;
          background-color: #feffe6;
        }

        ::selection {
          color: #fff;
          background: #0500e8;
        }

        .clearfix:after,
        .clearfix:before {
          display: table;
          content: '';
        }

        .clearfix:after {
          clear: both;
        }
      `}
    />
  );
}

export default GlobalStyles;
