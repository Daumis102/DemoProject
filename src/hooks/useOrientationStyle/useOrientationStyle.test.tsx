import {renderHook, RenderResult} from '@testing-library/react-hooks';
import {Dimensions, StyleSheet} from 'react-native';
import {act} from 'react-test-renderer';
import useOrientationStyle from './useOrientationStyle';

describe('useOrientation', () => {
  let portraitMock: any;
  let landscapeMock: any;
  let component: RenderResult<{
    style: any;
  }>;

  beforeEach(() => {
    portraitMock = StyleSheet.create({container: {backgroundColor: 'red'}});
    landscapeMock = StyleSheet.create({
      container: {backgroundColor: 'green'},
    });
    const {result} = renderHook(() =>
      useOrientationStyle(portraitMock, landscapeMock),
    );
    component = result;
  });

  it('should return portrait style by default', () => {
    expect(component.current.style).toStrictEqual(portraitMock);
  });

  it('should return landscape style when screen width is bigger than height', () => {
    act(() => {
      changeDimensions(500, 100);
    });
    expect(component.current.style).toStrictEqual(landscapeMock);
  });

  const changeDimensions = (width: number, height: number) => {
    Dimensions.set({window: {width, height}});
  };
});
