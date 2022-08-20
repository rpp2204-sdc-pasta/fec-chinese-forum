import React from 'react';
import OverviewImagesThumbnail from './OverviewImagesThumbnail.jsx';

class OverviewImages extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {/*
        The default view of the image gallery will be a single main image,
        overlaid by the list of thumbnail images.

        By default, the first image in the set will be displayed as the
        main image.  This image will match the smaller thumbnail image
        shown first.

        When switching between styles, the index of the image currently
        selected should be maintained when the gallery updates for the new
        style.

        Clicking on any thumbnail should update the main image to match
        that shown in the thumbnail clicked.

        The thumbnail corresponding to the image currently selected as the
        main image should be highlighted to indicate the current selection.

        Clicking on the currently selected thumbnail will have no further
        effect.

        Up to 7  thumbnail images will be displayed at a given time in the
        list.

        If more than 7 images are in the set for the style selected, the
        user should be able to scroll forward and backwards through the
        thumbnails.

        An arrow button pointing either direction should allow the customer
        to scroll through the remaining thumbnails in either direction.

        Customers should also be able to change to the next or previous image
        in the set using forward and backwards arrow buttons appearing near
        the right and left edges of the image, respectively. Upon clicking
        the right or left arrow, the main image and the thumbnail highlighted
        should update.

        If upon navigating to the previous or next image using the arrows,
        the thumbnail corresponding to the now selected image is no longer
        visible, then the thumbnail list should scroll similarly such that
        the newly selected thumbnail is visible.

        If the user hovers over the main image anywhere other than the
        thumbnails, the left arrow, or the right arrow, the mouse icon
        should change to show a magnifying glass.

        If the user clicks on the image, the image gallery should change to
        the expanded view.

        If the first image is selected, the left arrow should not appear.
        Similarly, if the last image is selected, the right arrow should not
        appear.


        */}
      </div>>
    );
  }
}

export default OverviewImages;
